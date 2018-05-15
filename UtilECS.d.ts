import { IComponent } from "./IComponent";
import { Dictionary } from "dictionaryjs";
import { ComponentName } from "./IEntity";
export declare class UtilECS {
    static addComponent(collection: Dictionary<ComponentName, IComponent>, component: IComponent): IComponent;
    static removeComponent(collection: Dictionary<ComponentName, IComponent>, component: IComponent | ComponentName): boolean;
    static hasComponent(collection: Dictionary<ComponentName, IComponent>, component: IComponent | ComponentName): boolean;
    static getComponent(collection: Dictionary<ComponentName, IComponent>, name: ComponentName, defaultValue?: any): IComponent | null;
    static updateComponents(collection: Dictionary<ComponentName, IComponent>): void;
    static disposeComponents(collection: Dictionary<ComponentName, IComponent>): void;
    private static getComponentName(component);
    private static isComponent(component);
}
