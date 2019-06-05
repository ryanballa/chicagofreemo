import React, { useState } from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Block from '../components/block'
import bostonandmaine from '../images/bostonandmaine.jpg'
import construction from '../images/construction.jpeg'

const StyledSection = styled('section')({
    '& h2': {
        '& svg': {
            paddingRight: '10px',
        },
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '10px',
    },
    '& h4': {
        marginBottom: '10px',
    },
    '& .inst': {
        marginBottom: '10px',
    },
    '& .selectOption': {
        '& li': {
            '&:after': {
                bottom: 0,
                content: "''",
                display: 'block',
                left: 0,
                position: 'absolute',
                height: '6px',
                width: '100%',
            },
            '&:nth-child(1):after': {
                background: 'rgb(36, 183, 255)',
                borderTop: '1px soid rgb(31, 156, 217)',
            },
            '&:nth-child(2):after': {
                background: '#6297cc',
                borderTop: '#3d5e7f',
            },
            '&:nth-child(3):after': {
                background: '#2e5fcc',
                borderTop: '#1b3878',
            },
            '&:nth-child(4):after': {
                background: '#2ebccc',
                borderTop: '#134c52',
            },
            '&.clicked': {
                background: '#cbe3ef',
                border: '1px solid #b0c5d0'
            },
            background: '#FFFFFF',
            border: '1px solid #CCCCCC',
            boxShadow: '0px 1px 4px rgba(0, 0, 0, .1)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: '15px',
            position: 'relative',
            height: '110px',
            marginRight: '20px',
            width: '110px',
        },
        '& li:last-child': {
            marginRight: 0,
        },
        '& li:hover': {
            cursor: 'pointer',
        },
        fontSize: '75%',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',

    }
});

const PlanPage = () => {

    const [score, setScore] = useState({});
    const [score2, setScore2] = useState({});
    const [score3, setScore3] = useState({});
    const [score4, setScore4] = useState({});
    const iconHeight = 33;
    const iconWidth = 33;

    const handleAnswerSelection = (questionNumber, value) => {
        switch (questionNumber) {
            case 1:
                setScore(value);
            break;
            case 2:
                setScore2(value);
            break;
            case 3:
                setScore3(value);
            break;
            case 4:
                setScore4(value);
            break;
        }
    }

    return (
        <Layout>
            <HeroBanner
            image={bostonandmaine}
            title="Interactive Layout Planner" 
            subtitle="Getting started is easy and we can help." 
            />
            <Block>
                <h1>Let's Begin</h1>
                <p>Answering a few questions will help us figure out what layout type is best for you.</p>
                <img src={construction} alt="Layout under construction" width="200" />
                <StyledSection>
                    <h2><svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>Time</h2>
                    
                    <p>Model railroading is approachable for anyone and their time allowances. From a little time to a lot of time you can get a lot of of the hobby.</p>
                    <p className="inst"><b>Select the amout of time you have available.</b></p>
                    <ul className="selectOption">
                        <li className={score === 2 ? 'clicked' : ''} onClick={() => handleAnswerSelection(1, 2)}><span>1 - 2 hours a month</span></li>
                        <li className={score === 4 ? 'clicked' : ''} onClick={() => handleAnswerSelection(1, 4)}><span>1 - 2 hours a week</span></li>
                        <li className={score === 6 ? 'clicked' : ''} onClick={() => handleAnswerSelection(1, 6)}><span>3 - 4 hours a week</span></li>
                        <li className={score === 8 ? 'clicked' : ''} onClick={() => handleAnswerSelection(1, 8)}><span>several hours a day</span></li>
                    </ul>
                    <h2>
                        <svg width={iconWidth} height={iconHeight} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart">
                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                        </svg>Collection Size</h2>
                    <p>From large to small anyone can find a fun entrace to the hobby.</p>
                    <p className="inst"><b>Select the size option that best matches your collection.</b></p>
                    <ul className="selectOption">
                        <li className={score2 === 2 ? 'clicked' : ''} onClick={() => handleAnswerSelection(2, 2)}><span>1 - 10 trains / railcars</span></li>
                        <li className={score2 === 4 ? 'clicked' : ''} onClick={() => handleAnswerSelection(2, 4)}><span>10 - 50 trains / railcars</span></li>
                        <li className={score2 === 6 ? 'clicked' : ''} onClick={() => handleAnswerSelection(2, 6)}><span>50 - 100 trains / railcars</span></li>
                        <li className={score2 === 8 ? 'clicked' : ''} onClick={() => handleAnswerSelection(2, 8)}><span>More than 100 trains / railcars</span></li>
                    </ul>
                    <h2>
                    <svg width={iconWidth} height={iconHeight}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>Space</h2>
                    <p>Apartment dwellers or folks with large basements can enjoy running trains on a layout.</p>
                    <p className="inst"><b>Select how much space you have to work with.</b></p>
                    <ul className="selectOption">
                        <li className={score3 === 2 ? 'clicked' : ''} onClick={() => handleAnswerSelection(3, 2)}><span>None</span></li>
                        <li className={score3 === 4 ? 'clicked' : ''} onClick={() => handleAnswerSelection(3, 4)}><span>Small amount (closet, table top)</span></li>
                        <li className={score3 === 6 ? 'clicked' : ''} onClick={() => handleAnswerSelection(3, 6)}><span>Medium amount (spare room, garage parking spot)</span></li>
                        <li className={score3 === 8 ? 'clicked' : ''} onClick={() => handleAnswerSelection(3, 8)}><span>Large amount (basement, shed)</span></li>
                    </ul>
                    <p>Everyone hopes to get something differet from the hobby. Some folks like seeing trains operate, others like the socialization, and you might enjoy the building or planning process. There is no wrong way to enjoy the hobby.</p>
                    <p className="inst"><b>Select what most interests you.</b></p>
                    <ul className="selectOption">
                        <li className={score4 === 2 ? 'clicked' : ''} onClick={() => handleAnswerSelection(4, 2)}><span>Socialization with fellow modellers</span></li>
                        <li className={score4 === 4 ? 'clicked' : ''} onClick={() => handleAnswerSelection(4, 4)}><span>Train Operations</span></li>
                        <li className={score4 === 6 ? 'clicked' : ''} onClick={() => handleAnswerSelection(4, 6)}><span>Building a layout</span></li>
                        <li className={score4 === 8 ? 'clicked' : ''} onClick={() => handleAnswerSelection(4, 8)}><span>Planning</span></li>
                    </ul>
                    <h3>Suggestions</h3>
                    {(score3 === 2 || score < 8 || score4 === 2) && (<div>
                        <h4>Join a model railroad club</h4>
                        <p>A model railroad club is a great way to get to know other model railroaders. It's also a perfect place to run trains if you don't have the space to build a layout.</p>
                    </div>)
                    }
                    {((score3 > 2 && score > 2) && (score3 > 4 || score4 === 2)) && (<div>
                        <h4>Join a modular club</h4>
                        <p>The benefits of a modular club are similar to a traditional club. The one difference is the ability to bring your own layout. Building something you own can provide a greater sense of accomplishment and freedom.</p>
                    </div>
                    )}
                    {(score2 > 4) && (<div>
                        <h4>Consider Display Cases</h4>
                        <p>Having a large collection often means you are unable to display it all at once. Putting up display cases would allow you to enjoy your trains even when they are not running.</p>
                    </div>)
                    }


                    {(score3 === 4 || ( score4 === 4 || score4 === 6)) && (<div>
                        <h4>Build a small shelf layout</h4>
                        <p>Just want to run trains? Even without a lot of space you can build something amazing looking, is fun to operate, and gives you the benefits of a larger layout in a small package. Something small is very achievable with limited time and space.</p>
                    </div>
                    )}

                    {(score3 > 4 && score > 4) && (<div>
                        <h4>Build a layout</h4>
                        <p>With time and space you can build something large. There's much to keep in mind when you plan a large investment in time and resources.</p>
                    </div>
                    )}
                </StyledSection>
            </Block>
        </Layout>
    )   
}

export default PlanPage
