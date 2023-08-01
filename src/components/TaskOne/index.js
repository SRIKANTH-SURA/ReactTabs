import {Component} from 'react'
import TabItem from '../TabItem'
import './index.css'


const tabsList = [
    {tabId: 'ORG', displayText: 'Choose Org'},
    {tabId: 'VENDER', displayText: 'Choose Vender'},
    {tabId: 'AUTHENTICATE', displayText: 'Authenticate'},
    {tabId: 'DIVICES', displayText: 'Choose Devices'},
  ]

class TaskOne extends Component {
    state = {
        activeTabId: tabsList[0].tabId,
        visitedTabIdList: [],
        // visitedTabId: "",
    }

    clickTabItem = tabId => {
        const {activeTabId, visitedTabIdList} = this.state
        // console.log(visitedTabIdList)
        this.setState({activeTabId: tabId})
        this.setState((prevState) => ({
            visitedTabIdList : [...prevState.visitedTabIdList, activeTabId]
        }))
        // this.setState({visitedTabId: activeTabId})
      }

      

    render(){
        const {activeTabId, visitedTabId, visitedTabIdList} = this.state
        console.log(visitedTabIdList)
        
        return(
            <div className='tabs-container'>
                <h1>React Tabs</h1>
                <ul className="tabs-list">
                    {tabsList.map(eachItem => (
                        <TabItem
                            key={eachItem.tabId}
                            tabItem={eachItem}
                            clickTabItem={this.clickTabItem}
                            isActive={activeTabId === eachItem.tabId}
                            // isvisited={visitedTabId === eachItem.tabId}
                            isvisited={visitedTabIdList.includes(eachItem.tabId)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default TaskOne;