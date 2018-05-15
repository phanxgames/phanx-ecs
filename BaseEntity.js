"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictionaryjs_1 = require("dictionaryjs");
const UtilECS_1 = require("./UtilECS");
class BaseEntity {
    constructor() {
        this.components = new dictionaryjs_1.Dictionary();
    }
    /**
     * Add component.
     * @param {IComponent} component
     * @returns {IComponent} Returns component that was added. (For chaining)
     */
    addComponent(component) {
        return UtilECS_1.UtilECS.addComponent(this.components, component);
    }
    /**
     * Removes component by reference or name.
     * @param {IComponent|ComponentName} component
     * @returns {boolean} Returns component that was removed.
     */
    removeComponent(component) {
        return UtilECS_1.UtilECS.removeComponent(this.components, component);
    }
    /**
     * Checks if the component reference exists.
     * @param {IComponent|ComponentName} component
     * @returns {boolean} Returns true or false.
     */
    hasComponent(component) {
        return UtilECS_1.UtilECS.hasComponent(this.components, component);
    }
    /**
     * Returns the component by name or null if not found.
     * @param {ComponentName} name
     * @param defaultValue (optional)
     * @returns {IComponent|null}
     */
    getComponent(name, defaultValue = null) {
        return UtilECS_1.UtilECS.getComponent(this.components, name, defaultValue);
    }
    /**
     * Returns the Dictionary of components.
     * @returns {Dictionary<ComponentName, IComponent>}
     */
    getComponents() {
        return this.components;
    }
    /**
     * Call on tick to update this entity and all children.
     */
    updateComponents() {
        UtilECS_1.UtilECS.updateComponents(this.components);
    }
    /**
     * Call to dispose this entity and children.
     */
    disposeComponents() {
        UtilECS_1.UtilECS.disposeComponents(this.components);
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map