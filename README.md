
# Phanx ECS

A simple implementation of a Entity Component System written in TypeScript.

### Install

```
npm install phanx-ecs
```

## Setting up your Entities

You may either use this library by extending the **BaseEntity** class or by implementing **IEntity** directly.

### 1) Extend BaseEntity

```typescript
import {BaseEntity} from "phanx-ecs/BaseEntity";

export class Person extends BaseEntity {
    ...
}
```

The **BaseEntity** class has implemented all methods for you, and you now have access to them.

You will need to optionally call both **updateComponents()** and **disposeComponents()** methods if you wish to update (or tick) your components or clean up the components.


### 2) Implement IEntity

```typescript
import {IEntity} from "phanx-ecs/IEntity";

export class Person implements IEntity {
    ...
}
```
To assist in the implementation of the required methods you may use the **UtilECS** class which exposes the implementations as static methods.

Example:

```typescript
...
    addComponent(component: IComponent): IComponent {
        return UtilECS.addComponent(this.components, component);
    }
...
```

See the source code of the **BaseEntity** class for further examples.


## Setting up your Components

### Implement IComponent

In the following example we create a **Position** component.
```typescript
import {IComponent} from "phanx-ecs/IComponent";

export class Position implements IComponent {

    componentName:string = "Position";

    //properties
    public x:number;
    public y:number;
}
```
Notice, we had to give the component a name by setting the **componentName** property, this is a requirement of the interface **IComponent**.

### Optional onAdded() and onRemoved()
You may optionally use the **onAdded()** and **onRemoved()** methods to add functionality when the component is added or removed from its parent entity.  These methods will be automatically called by the Entity.

Example:
```typescript
...
   onAdded():void {
      addListener("on_move", this.moved);
   }

   onRemoved():void {
      removeListener("on_move",this.moved);
   }
...
```

## Example

See the example directory for a basic example of an Entity and two Components.

# API

## IEntity

**components**:*Dictionary<ComponentName, IComponent>*

> ***Property***.
>
> The Dictionary that stores all components of this entity.  Stored by ComponentName:*string* as the key.

**entityChildren**:*Set<IEntity\>*

 > ***Property***.
 >
 > The Set that stores all entity children of this entity. 



**addEntityChild**(*entity:IEntity*):*IEntity*

> Adds a child entity to this entity.
>
> **Returns:** IEntity inserted, useful for chaining.
>
> **Parameters:**
> * entity:*IEntity*


**removeEntityChild**(*entity:IEntity*):*boolean*

> Removes a child entity from this entity.
>
> **Returns:** Boolean - if the entity was removed.
>
> **Parameters:**
> * entity:*IEntity*


**hasEntityChild**(*entity:IEntity*):*boolean*

> Check whether this entity has the child entity.
>
> **Returns:** Boolean - if the child entity was found.
>
> **Parameters:**
> * entity:*IEntity* 

**getEntityChildren**():*Array<IEntity>*

> Returns all child entities on this entity.
>
> **Returns:** the array of entities
>
> **Parameters:**
> * None
>


**addComponent**(*component:IComponent*):*IComponent*

> Adds a component to the entity.
>
> **Returns:** IComponent inserted, useful for chaining.
>
> **Parameters:**
> * component:*IComponent*


**removeComponent**(*component:IComponent|ComponentName*):*boolean*

> Removes a component from the entity.
>
> **Returns:** Boolean - if the component was removed.
>
> **Parameters:**
> * component:*IComponent|ComponentName* - The component by reference or by name.


**hasComponent**(*component:IComponent|ComponentName*):*boolean*

> Check whether the entity has a component.
>
> **Returns:** Boolean - if the component was found.
>
> **Parameters:**
> * component:*IComponent|ComponentName* - The component by reference or by name.

**getComponent**(*component:ComponentName*):*IComponent*

> Returns component by name.
>
> **Returns:** the component or null
>
> **Parameters:**
> * component:*ComponentName* - The component by  by name.

**getComponents**():*Dictionary<ComponentName, IComponent>*

> Returns all components on the entity.
>
> **Returns:** the dictionary of components
>
> **Parameters:**
> * None

*Optional* - **update**(t:number):*void*

> *Included on **BaseEntity**.*
>
> Call when you wish to update all components.  Calls comp.**update(t)** method on each component. Calls entity.**update(t)** method on each child entity.

*Optional* - **dispose**():*void*

> *Included on **BaseEntity**.*
>
> Call when you wish to dispose all components.  Calls comp.**dispose()** method on each component. Calls entity.**dispose()** method on each child entity.

## IComponent


**componentName**:*string*

> Give your component a unique name. Recommended to use the Class Name.


*Optional* - **onAdded**():*void*

> Called when the component was added to the Entity.

*Optional* - **onRemoved**():*void*

> Called when the component was removed from the Entity.

*Optional* - **update**():*void*

> Called when from the entity automatically from the entity.**update(t)** method.

*Optional* - **dispose**():*void*

> Called when from the entity automatically from the entity.**dispose()** method.

## Dependencies

- [dictionaryjs](https://github.com/phanxgames/dictionaryjs)