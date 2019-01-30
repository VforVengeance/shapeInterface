import { Shape } from './Shape';
import { angularMath } from 'angular-ts-math';
export class Circle implements Shape{
    public ray: number

    constructor(ray: number){
        this.ray = ray
    }
    
    getArea(): number {
        let area = angularMath.getPi() * (this.ray * this.ray)
        return  area
    }

    getPerimeter(): number {
        let perimeter = (angularMath.getPi()*2) * this.ray
        return perimeter
    }
}