import {ComponentName, IEntity} from "./IEntity";
import {IComponent} from "./IComponent";
import {Dictionary} from "dictionaryjs";
import {UtilECS} from "./UtilECS";

export class BaseEntity implements IEntity {


    public components: Dictionary<ComponentName, IComponent> =
        new Dictionary<ComponentName, IComponent>();

    public entityChildren: Set<IEntity> = new Set<IEntity>();


    addEntityChild(entity: IEntity): IEntity {
        this.entityChildren.add(entity);
        return entity;
    }

    removeEntityChild(entity: IEntity): boolean {
        return this.entityChildren.delete(entity);
    }

    hasEntityChild(entity: IEntity): boolean {
        return this.entityChildren.has(entity);
    }

    getEntityChildren(): Array<IEntity> {
        //@ts-ignore
        return this.entityChildren.values();
    }




    /**
     * Add component.
     * @param {IComponent} component
     * @returns {IComponent} Returns component that was added. (For chaining)
     */
    addComponent(component: IComponent): IComponent {
        return UtilECS.addComponent(this.components, component);
    }

    /**
     * Removes component by reference or name.
     * @param {IComponent|ComponentName} component
     * @returns {boolean} Returns component that was removed.
     */
    removeComponent(component: IComponent | ComponentName): boolean {
        return UtilECS.removeComponent(this.components, component);
    }

    /**
     * Checks if the component reference exists.
     * @param {IComponent|ComponentName} component
     * @returns {boolean} Returns true or false.
     */
    hasComponent(component: IComponent | ComponentName): boolean {
        return UtilECS.hasComponent(this.components, component);
    }

    /**
     * Returns the component by name or null if not found.
     * @param {ComponentName} name
     * @param defaultValue (optional)
     * @returns {IComponent|null}
     */
    getComponent(name: ComponentName, defaultValue: any = null): IComponent | null {
        return UtilECS.getComponent(this.components, name, defaultValue);
    }

    /**
     * Returns the Dictionary of components.
     * @returns {Dictionary<ComponentName, IComponent>}
     */
    getComponents(): Dictionary<ComponentName, IComponent> {
        return this.components;
    }




    /**
     * Call on tick to update this entity and all children.
     */
    update(t:number=0): void {

        UtilECS.updateComponents(this.components, t);
        UtilECS.updateEntityChildren(this.entityChildren, t);

    }

    /**
     * Call to dispose this entity and children.
     */
    dispose() {
        UtilECS.disposeComponents(this.components);
        UtilECS.disposeEntityChildren(this.entityChildren);
    }

}