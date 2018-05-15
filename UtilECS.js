"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UtilECS {
    static addComponent(collection, component) {
        collection.set(component.componentName, component);
        if (component != null && component.hasOwnProperty("onAdded"))
            component.onAdded();
        return component;
    }
    static removeComponent(collection, component) {
        let name = UtilECS.getComponentName(component);
        if (collection.has(name)) {
            let comp = collection.get(name);
            if (comp != null && comp.hasOwnProperty("onRemoved"))
                comp.onRemoved();
            collection.remove(name);
            return true;
        }
        return false;
    }
    static hasComponent(collection, component) {
        let name = UtilECS.getComponentName(component);
        return collection.has(name) ||
            collection.contains(component);
    }
    static getComponent(collection, name, defaultValue = null) {
        return collection.getDefault(name, defaultValue);
    }
    static updateComponents(collection) {
        if (collection == null)
            return;
        for (let comp of collection) {
            if (comp != null && comp.hasOwnProperty("update"))
                comp.update();
        }
    }
    static disposeComponents(collection) {
        if (collection == null)
            return;
        for (let comp of collection) {
            if (comp != null) {
                if (comp.hasOwnProperty("onRemoved"))
                    comp.onRemoved();
                if (comp.hasOwnProperty("dispose"))
                    comp.dispose();
            }
        }
        collection.empty();
    }
    static getComponentName(component) {
        if (UtilECS.isComponent(component))
            return component.componentName;
        else
            return component;
    }
    static isComponent(component) {
        return !(typeof component === "string");
    }
}
exports.UtilECS = UtilECS;
//# sourceMappingURL=UtilECS.js.map