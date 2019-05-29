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
            '&.first:after': {
                background: 'rgb(36, 183, 255)',
                borderTop: '1px soid rgb(31, 156, 217)',
            },
            '&.second:after': {
                background: '#6297cc',
                borderTop: '#3d5e7f',
            },
            '&.third:after': {
                background: '#2e5fcc',
                borderTop: '#1b3878',
            },
            '&.fourth:after': {
                background: '#2ebccc',
                borderTop: '#134c52',
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
            background: '#efefef',
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
    const iconHeight = 33;
    const iconWidth = 33;

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
                    <h2><svg width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-clock">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>Time</h2>
                    
                    <p>Model railroading is approachable for anyone and their time allowances. From a little time to a lot of time you can get a lot of of the hobby.</p>
                    <p><b>Select the amout of time you have available.</b></p>
                    <ul className="selectOption">
                        <li className="first" onClick={() => setScore({1: 2})}><span>1 - 2 hours a month</span></li>
                        <li className="second" onClick={() => setScore({1: 4})}><span>1 - 2 hours a week</span></li>
                        <li className="third" onClick={() => setScore({1: 6})}><span>3 - 4 hours a week</span></li>
                        <li className="fourth" onClick={() => setScore({1: 8})}><span>several hours a day</span></li>
                    </ul>
                    <h2>
                        <svg width={iconWidth} height={iconHeight} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                        </svg>Collection Size</h2>
                    <p>From large to small anyone can find a fun entrace to the hobby.</p>
                    <p><b>Select the size option that best matches your collection.</b></p>
                    <ul className="selectOption">
                        <li><span>1 - 10 trains / railcars</span></li>
                        <li><span>10 - 50 trains / railcars</span></li>
                        <li><span>50 - 100 trains / railcars</span></li>
                        <li><span>More than 100 trains / railcars</span></li>
                    </ul>
                    <h2>
                    <svg width={iconWidth} height={iconHeight}  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>Space</h2>
                    <p>Apartment dwellers or folks with large basements can enjoy running trains on a layout.</p>
                    <p><b>Select how much space you have to work with.</b></p>
                    <ul className="selectOption">
                        <li><span>None</span></li>
                        <li><span>Small amount (closet, table top)</span></li>
                        <li><span>Medium amount (spare room, garage parking spot)</span></li>
                        <li><span>Large amount (basement, shed)</span></li>
                    </ul>
                    <h3>Results</h3>
                    <h2>Score: {score[1]}</h2>
                    <h4>Join a static club</h4>

                    <h4>Join a modular club</h4>

                    <h4>Build a small shelf layout</h4>

                    <h4>Build a layout</h4>
                </StyledSection>
            </Block>
        </Layout>
    )   
}

export default PlanPage
