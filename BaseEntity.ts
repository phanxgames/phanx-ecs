import {ComponentName, IEntity} from "./IEntity";
import {IComponent} from "./IComponent";
import {Dictionary} from "dictionaryjs";
import {UtilECS} from "./UtilECS";

export class BaseEntity implements IEntity {

    public components: Dictionary<ComponentName, IComponent> =
        new Dictionary<ComponentName, IComponent>();

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
    updateComponents(): void {

        UtilECS.updateComponents(this.components);

    }

    /**
     * Call to dispose this entity and children.
     */
    disposeComponents(): void {

        UtilECS.disposeComponents(this.components);

    }


}