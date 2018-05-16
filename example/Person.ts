import {BaseEntity} from "../BaseEntity";
import {Position} from "./components/Position";
import {Sleeping} from ".//components/Sleeping";

export class Person extends BaseEntity {

    //components
    public position:Position;

    //properties
    public name:string;

    constructor(name:string, x:number=0, y:number=0) {
        super();

        this.name = name;

        this.addComponents();

        //set initial position
        this.position.x = x;
        this.position.y = y;
    }

    private addComponents() {
        //Position should always be present
        this.position = this.addComponent(new Position(this)) as Position;
    }

    public move(x:number,y:number):void {

        if (this.hasComponent("Sleeping"))
            console.log(this + " cannot move while asleep to x:", x , ", y:" , y);
        else {
            this.position.x = x;
            this.position.y = y;
            console.log(this + " moved to x:" , x, ", y:", y);
        }
    }

    public sleep():void {
        this.addComponent(new Sleeping(this));
    }
    public wakeUp():void {
        this.removeComponent("Sleeping");
    }


    public toString():string {
        return this.name;
    }
}