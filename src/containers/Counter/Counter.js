import React, { Component } from 'react';
import { connect } from 'react-redux';
 
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/actions';

class Counter extends Component {

    render () {
        // debugger
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={ this.props.ctr } />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter }  />
                <CounterControl label="Add" clicked={ this.props.onAddFive }  />
                <CounterControl label="Subtract" clicked={ this.props.onSubtractFive }  />
                <hr />
                <button onClick={ () => this.props.onStoreResult(this.props.ctr) } >Store Result</button>
                <ul>
                    { this.props.storedResults.map( strResult => (
                      <li key={ strResult.id } 
                          onClick={ () => this.props.onDeleteResult( strResult.id ) }
                      >
                        { strResult.value }
                      </li>
                      ) )  
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      ctr: state.ctr.counter,
      storedResults: state.res.results,
    };
}

const mapDispatchToProps = dispatch => {
    return {
      // onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
      onIncrementCounter: () => dispatch( actionCreators.increment()),
      onDecrementCounter: () => dispatch( actionCreators.decrement() ),
      onAddFive: () => dispatch( actionCreators.add(10) ),
      onSubtractFive: () => dispatch( actionCreators.subtract(15) ),
      // onStoreResult: (counterVal) => dispatch({ type: actionType.STORE_RESULT, payload: { counterVal } }),
      onStoreResult: (counterVal) => dispatch( actionCreators.storeResult(counterVal) ),
      // onDeleteResult: (clickedLiID) => dispatch({ type: actionType.DELETE_RESULT, id: clickedLiID }),
      onDeleteResult: (clickedLiID) => dispatch( actionCreators.deleteResult(clickedLiID) ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);