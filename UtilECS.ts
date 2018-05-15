import {IComponent} from "./IComponent";
import {Dictionary} from "dictionaryjs";
import {ComponentName} from "./IEntity";

export class UtilECS {

    static addComponent(collection:Dictionary<ComponentName,IComponent>,
                        component: IComponent): IComponent
    {
        collection.set(component.componentName, component);
        if (component!=null && component.hasOwnProperty("onAdded"))
            component.onAdded();
        return component;
    }

    static removeComponent(collection:Dictionary<ComponentName,IComponent>,
                           component: IComponent | ComponentName): boolean
    {
        let name:ComponentName = UtilECS.getComponentName(component);
        if (collection.has(name)) {
            let comp:IComponent = collection.get(name);
            if (comp!=null && comp.hasOwnProperty("onRemoved"))
                comp.onRemoved();
            collection.remove(name);
            return true;
        }
        return false;
    }

    static hasComponent(collection:Dictionary<ComponentName,IComponent>,
                        component: IComponent | ComponentName):boolean
    {
        let name:ComponentName = UtilECS.getComponentName(component);
        return collection.has(name) ||
            collection.contains(component as IComponent);
    }

    static getComponent(collection:Dictionary<ComponentName,IComponent>,
                        name: ComponentName, defaultValue:any=null)
    : IComponent | null
    {
        return collection.getDefault(name, defaultValue);
    }


    static updateComponents(collection:Dictionary<ComponentName,IComponent>)
    :void
    {
        if (collection==null)
            return;

        for (let comp of collection) {
            if (comp!=null && comp.hasOwnProperty("update"))
                comp.update();
        }
    }

    static disposeComponents(collection:Dictionary<ComponentName,IComponent>)
    :void
    {
        if (collection==null)
            return;

        for (let comp of collection) {
            if (comp!=null) {

                if (comp.hasOwnProperty("onRemoved"))
                    comp.onRemoved();

                if (comp.hasOwnProperty("dispose"))
                    comp.dispose();

            }
        }

        collection.empty();
    }


    private static getComponentName(component: IComponent | ComponentName)
    :ComponentName
    {
        if (UtilECS.isComponent(component))
            return (component as IComponent).componentName;
        else
            return component as string;
    }


    private static isComponent(component: IComponent | ComponentName):boolean {
        return !(typeof component === "string");
    }

}