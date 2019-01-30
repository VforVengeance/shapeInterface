import { Shape } from './Shape';

export class Triangle implements Shape{
    public height: number
    public basis: number

    constructor(height: number, basis: number){
        this.height = height
        this.basis = basis
    }
    
    getArea(): number {
        let area = (this.height * this.basis )/2
        return  area
    }

    getPerimeter(): number {
        let hypotenuse = Math.sqrt((this.basis*this.basis) + (this.height*this.height))
        let perimeter = hypotenuse + this.basis + this.height
        return perimeter
    }
}