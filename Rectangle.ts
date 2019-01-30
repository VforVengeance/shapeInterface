import { Shape } from './Shape';

export class Rectangle implements Shape{
    public height: number
    public basis: number

    constructor(height: number, basis: number){
        this.height = height
        this.basis = basis
    }
    
    getArea(): number {
        let area = this.height * this.basis
        return  area
    }

    getPerimeter(): number {
        let perimeter = (2*this.height) + (2*this.basis)
        return perimeter
    }
}