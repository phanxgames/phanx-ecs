import {IComponent} from "../../IComponent";
import {Person} from "../Person";

export class Position implements IComponent {
    public componentName: string = "Position";

    //references
    public parent:Person;

    //properties
    public x:number = 0;
    public y:number = 0;

    constructor(parent:Person) {
        this.parent = parent;
    }

    public toString():string {
        return "x:" + this.x + ", y:" + this.y;
    }


}