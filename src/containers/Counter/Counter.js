import React, { Component } from 'react';
import { connect } from 'react-redux';
 
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

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
                <button onClick={ this.props.onStoreResult } >Store Result</button>
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
      ctr: state.counter,
      storedResults: state.results,
    };
}

const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
      onDecrementCounter: () => dispatch({ type: actionType.DECREMENT } ),
      onAddFive: () => dispatch({ type: actionType.ADD, val: 10 }),
      onSubtractFive: () => dispatch({ type: actionType.SUBTRACT, val: 15 }),
      onStoreResult: () => dispatch({ type: actionType.STORE_RESULT }),
      onDeleteResult: (clickedLiID) => dispatch({ type: actionType.DELETE_RESULT, id: clickedLiID }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);