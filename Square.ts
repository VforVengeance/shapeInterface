import { Rectangle } from './Rectangle';

export class Square extends Rectangle{
    public side: number

    constructor(side: number){
        super(side, side)
    }
    
}