import {Item} from '../item/item'

export const ItemList = ({items=[]})=> {

    return(
        <div className="flex">
            {items.map(item => <Item item={item}/>)}
        </div>
        
        )
}