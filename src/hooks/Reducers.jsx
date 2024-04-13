export const BagReducerFunc = (addedItems, action) => {
    switch (action.type) {
        case 'if_exist': {
            return addedItems.map(item =>
                item.id === action.cardId ? { ...item, count: item.count + 1 } : item
            )
        }
        case 'if_not_exist': {
            return [{ ...action.card }, ...addedItems]
        }
        case 'increment_button': {
            return addedItems.map(card => {
                if (card.id === action.itemId) return { ...card, count: card.count + 1 }
                return card
            })
        }
        case 'decrement_button': {
            return action.decrementArr
        }
        case 'remove_button': {
            return addedItems.filter(c => c.id !== action.itemId)
        }
    }
    throw Error('Unknown action: ' + action.type);
}