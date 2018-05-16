import {IComponent} from "../../IComponent";
import {Person} from "../Person";

export class Sleeping implements IComponent {
    public componentName: string = "Sleeping";

    //references
    public parent: Person;

    constructor(parent: Person) {
        this.parent = parent;
    }

    public onAdded(): void {
        console.log(this.parent + " went to sleep")
    }

    public onRemoved(): void {
        console.log(this.parent + " woke up")
    }
}