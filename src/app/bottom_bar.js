import './bottom_bar.css';

function BottomBar(props){
    return( 
        <div className='bottom_bar'>
            <span className='bottom_bar_text'>Ilość dostępnych pytań: {props.questionsCount}</span>
            <span className='bottom_bar_text_right'>Ostatnia zmiana: 23.09.2022 20:00</span>
        </div>
    );
}

export default BottomBar;