import './test_view.css';

import React, {useState} from 'react';
import QuestionItem from './question_item';

function TestView(props){
    const [test, setTest] = useState([]);

    const randomTest = () => {
        let q = [];

        for(let i = 0;i<10;i++){
            let v = props.questions[Math.floor(Math.random() * props.questions.length)];
            if(q.filter(t=>t.question === v.question).length > 0){
                i--;
                continue;
            }
            q.push(v);

            setTest(q);
        }
        console.log(q);
    }

    const returnTest = () =>{
        let ret = [];

        for(let i = 0;i<test.length;i++){
            ret.push(<QuestionItem key={test[i].id} question={test[i]}></QuestionItem>);
            ret.push(<hr/>);
        }

        return ret;
    }

    return(
        <div className='test_view'>
            <center>
                <button className="button_style" onClick={() => {randomTest()}}>Losuj test!</button>
            </center>
            <div className='test'>
                <center>
                    {returnTest()}
                </center>
            </div>
        </div>
    );
}

export default TestView;