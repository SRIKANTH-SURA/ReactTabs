import './index.css'

const TabItem = props => {
    const {tabItem, clickTabItem, isActive, isvisited} = props
    const {tabId, displayText} = tabItem

    // const visitActive = {(isActive == isvisited)? "flase" : "true"}

    const activeTabClassName = isActive ? 'active-tab-btn' : ''
    const visitedClassName = isvisited ? 'visited-tab-btn' : ''


    const visitedIcon = () => {
        return <img className='icon-img' src='https://image.similarpng.com/very-thumbnail/2021/05/Right-Correct-check-in-Green-Icon-Sign-on-transparent-background-PNG.png' alt='visited-icon' />
    }

    const loadingIcon = () => {
        return <img className='icon-img' src='https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png' alt='loading-icon' />
    }



    const onClickTabItem = () => {
        clickTabItem(tabId)
    }

    return (
        <li className="tab-item">
            <button type='button' className={`button ${activeTabClassName} ${visitedClassName}`} onClick={onClickTabItem}>
                {isActive && loadingIcon()}
                {(isvisited && !isActive) && visitedIcon()}
                {displayText}
            </button>
        </li>
    )

}

export default TabItem


