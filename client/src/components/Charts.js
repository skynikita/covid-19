import React, {useState,useEffect} from 'react';
import {Card, Row, Col, Divider } from 'antd';
import axios from "axios";
import {Pie,Bar,Rose} from '@ant-design/charts';

const Charts = () => {
    const [totalCase, setTotalCase] = useState('loading...');
    const [todayCases, setTodayCases] = useState('loading...');
    const [deaths, setDeaths] = useState('loading...');
    const [active, setActive] = useState('loading...');
    const [recovered,setRecovered] = useState('loading...')
    const [population, setPopulation] = useState('loading')



    useEffect(() => {
        axios.get('/api/data/ausdata').then(
            res => {
                if (res.data[0]) {
                    console.log(res.data);
                    setTotalCase(res.data[0].cases)
                    setTodayCases(res.data[0].todayCases)
                    setDeaths(res.data[0].deaths)
                    setActive(res.data[0].active)
                    setRecovered(res.data[0].recovered)
                    setPopulation(res.data[0].population)
                } else {
                    setTotalCase('No Data')
                    setTodayCases('No Data')
                    setDeaths('No Data')
                    setActive('No Data')
                    setRecovered('No Data')
                    setPopulation('No Data')

                }

            }
        )
    });

    const data_pie2 = [
        {
            type: 'Total Cases',
            value: totalCase,
        },
        {
            type: 'Deaths',
            value: deaths,
        },
        ];

    const config_pie2 = {
        appendPadding: 10,
        data: data_pie2,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                formatter: function formatter() {
                    return 'Covid-19';
                },
            },
        },
    };






    const data = [
        {
            type: 'Total Cases',
            value: totalCase,
        },
        {
            type: 'Recovered',
            value: recovered
        },
        {
            type: 'Deaths',
            value: deaths,
        },
        {
            type: 'Active',
            value: active,
        },
        {
            type: 'Today Cases',
            value: todayCases,
        },

    ];
    let config_pie = {
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',

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
        <>
        <Row justify="space-around" align="middle">
            <Col span={6}>
                <Pie {...config_pie} />
            </Col>
            <Col span={6}>
                <Bar {...config_bar} />
            </Col>
        </Row>
            <Divider />
        <div>
            <Pie {...config_pie2} />
        </div>
        </>
    )
};

export default Charts;


