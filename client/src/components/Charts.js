import React, {useState,useEffect} from 'react';
import {Card, Row, Col, Divider } from 'antd';
import axios from "axios";
import {Pie,Bar} from '@ant-design/charts';

const Charts = () => {
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

    const data = [
        {
            type: 'Total Case',
            value: totalCase,
        },
        {
            type: 'Today Cases',
            value: todayCases,
        },
        {
            type: 'Deaths',
            value: deaths,
        },
        {
            type: 'Active',
            value: active,
        },
    ];
    let config_pie = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'outer',

            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [{ type: 'element-active' }],
    };

    let config_bar = {
        data: data,
        xField: 'value',
        yField: 'type',
        seriesField: 'type',
        color: function color(_ref) {
            let type = _ref.type;
            return type === 'Total Cases' ? '#FAAD14' : '#5B8FF9';
        },
        legend: false,
        meta: {
            type: { alias: 'type' },
            value: { alias: 'value' },
        },
    };

    return (
        <Row justify="space-around" align="middle">
            <Col span={6}>
                <Pie {...config_pie} />
            </Col>
            <Col span={6}>
                <Bar {...config_bar} />
            </Col>
        </Row>
    )
};

export default Charts;


