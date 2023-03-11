import React from 'react'
import "./Contacts.css"
import SingleContact from './SingleContact'
import Image from "../assets/logo512.png"
import Favourites from './Favourites'

const data = [{ name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhutgt', icon: Image }, { name: 'jgvdic', lastMessage: 'jgvikvikgogolhgujkujollujhljuhvkhvoolbolboljlojblohutgt', icon: Image }]

const favourites = [{ name: 'jgvkjllllhlpihpihpdic', icon: Image }, { name: 'jgvdic', icon: Image }, { name: 'jgvdic', icon: Image }, { name: 'jgvdic', icon: Image }]

const Contacts = (): JSX.Element => {
    return (
        <div className='contact'>
            <div className='title'>
                <span>Chats</span>
            </div>
            <div className="searchbar">
                <input type="search" placeholder='Search users' />
            </div>
            <div className="favourites">
                <div className='favContainer'>
                    {favourites.map((user,index) => <Favourites data={user} key={index} />)}
                </div>
            </div>
            <div className='recent'>
                <span style={{ fontSize: '17px', paddingLeft: '15px', paddingTop: '5px', paddingBottom: '3px' }}><strong>Recent</strong></span>
                <div className="recentContacts">
                    <span>{data.map((user, index) => <SingleContact data={user} key={index} />)}</span>
                </div>
            </div>
        </div>
    )
}

export default Contacts