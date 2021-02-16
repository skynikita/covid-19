import React, {useState,useEffect} from 'react';
import {Card, Row, Col, Divider } from 'antd';
import axios from "axios";


const Cards = () =>{
    const [totalCase, setTotalCase] = useState('loading...');
    const [todayCases, setTodayCases] = useState('loading...');
    const [deaths, setDeaths] = useState('loading...');
    const [active, setActive] = useState('loading...');


     useEffect(() => {
         axios.get('/api/data/ausdata').then(
             res => {
                 if (res.data[0]) {
                     console.log(res.data);
                     setTotalCase(res.data[0].cases)
                     setTodayCases(res.data[0].todayCases)
                     setDeaths(res.data[0].deaths)
                     setActive(res.data[0].active)
                 } else {
                     setTotalCase('No Data')
                     setTodayCases('No Data')
                     setDeaths('No Data')
                     setActive('No Data')

                 }

             }
         )
     })

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="site-card-border-less-wrapper gutter-row"  span={6} style={{flex:1}}>
            <Card title="Total Cases" bordered={false} style={{ width: 300}}>
                <h1>{totalCase}</h1>

            </Card>
        </Col>
            <Col className="site-card-border-less-wrapper gutter-row" span={6} style={{flex:1}}>
                <Card title="Today cases" bordered={false} style={{ width: 300}}>
                    <h1 style={{color:'green'}}>{todayCases}</h1>

                </Card>
            </Col>
                <Col className="site-card-border-less-wrapper gutter-row" span={6} style={{flex:1}}>
                    <Card title="Deaths" bordered={false} style={{ width: 300}}>
                        <h1 style={{color:'red'}}>{deaths}</h1>

                    </Card>
                </Col>
            <Col className="site-card-border-less-wrapper gutter-row" span={6} style={{flex:1}}>
                <Card title="Active" bordered={false} style={{ width: 300}}>
                    <h1>{active}</h1>

                </Card>
            </Col>

        </Row>
    )
};

export default Cards;
