import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    public sumItems(): number{
        return this._items.reduce((sum: number, current: Buyable) => sum + current.price * current.amound, 0);
    };

    sumDiscontItem(discont: number): number{
        const sumDis = this.sumItems() * (discont/100);
        return this.sumItems()- sumDis;
    };
    
    deleteItem(id: number):void{
        this._items = this._items.filter((item: Buyable) => item.id !== id)

    }


}