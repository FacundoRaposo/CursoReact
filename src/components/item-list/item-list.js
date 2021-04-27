import {Item} from '../item/item'

export const ItemList = ({items=[]})=> {

    return(
        <div className="sumatoria">
            {items.map(item => <Item item={item}/>)}
        </div>
        
        )
}