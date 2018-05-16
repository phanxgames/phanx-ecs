
export interface IComponent {

    /**
     * Give each component a unique name.
     * Recommended to use the ClassName.
     */
    componentName: string;

    /**
     * @optional
     * Called when this component has been added to an entity.
     * Useful for adding listeners, etc.
     */
    onAdded?(): void;

    /**
     * @optional
     * Called when this component has been removed from an entity.
     * Usful for removing listeners, etc.
     */
    onRemoved?(): void;

    /**
     * @optional
     * Called from entity on update tick.
     */
    update?(): void;

    /**
     * @optional
     * Called from entity when it is disposing its components.
     */
    dispose?(): void;
}