import {IComponent} from "./IComponent";
import {Dictionary} from "dictionaryjs";

export type ComponentName = string;

export interface IEntity {


    components: Dictionary<ComponentName, IComponent>;


    entityChildren: Set<IEntity>;



    addEntityChild(entity:IEntity): IEntity;

    removeEntityChild(entity:IEntity):boolean;

    hasEntityChild(entity:IEntity):boolean;

    getEntityChildren():Array<IEntity>;





    /**
     * Add component.
     * @param {IComponent} component
     * @returns {IComponent} Returns component that was added. (For chaining)
     */
    addComponent(component: IComponent): IComponent;

    /**
     * Removes component by reference or name.
     * @param {IComponent|ComponentName} component
     * @returns {boolean} Returns component that was removed.
     */
    removeComponent(component: IComponent | ComponentName): boolean;


    /**
     * Checks if the component reference exists.
     * @param {IComponent|ComponentName} component
     * @returns {boolean} Returns true or false.
     */
    hasComponent(component: IComponent | ComponentName): boolean;


    /**
     * Returns the component by name or null if not found.
     * @param {ComponentName} name
     * @param defaultValue (optional)
     * @returns {IComponent|null}
     */
    getComponent(name: ComponentName, defaultValue?: any): IComponent | null;

    /**
     * Returns the Dictionary of components.
     * @returns {Dictionary<ComponentName, IComponent>}
     */
    getComponents(): Dictionary<ComponentName, IComponent>;


    /**
     * @optional
     * Call on tick to update this entity and all children.
     */
    update?(t:number): void;

    /**
     * @optional
     * Call to dispose this entity and children.
     */
    dispose?(): void;

}