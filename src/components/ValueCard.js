import React , {Component} from "react";
import Airtable from 'airtable-node'

const Values = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

class ValueCard extends Component {
    propose = () => {
        var element = document.getElementById(this.props.id);
        element.style.opacity = "0.2";
        
        Values.update(this.props.id, {"Promotion": 1}).then(resp => {
            console.log(resp)
            
            element.style.borderColor = "yellow";
            element.style.borderWidth = "medium";
        })
    }

    /* let atHref = "https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg" + this.props.id; */

    openInAt = () => {
        console.log("Opening in Airtable")
        window.open("https://airtable.com/tbl7pyCYwx12t7LHu/viwnPcTZz8PXg4Smt/" + this.props.id)
    }
    
    render() {
        return (
        <div>
            <a href = {this.href} className="shadow-md hover:shadow-lg active:border-gray-500 group block rounded-lg p-4 border hover:border-gray-200 m-2 text-left justify-left text-justify" id={this.props.id}>
                <div className="p-3 grid">
                    <div className="font-medium text-black text-xl pb-2">{this.props.name}</div>
                </div>
                <div className="grid grid-cols-3">
                    <button onClick={() => this.propose()}
                            className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm"
                        >
                            Endorse
                    </button>

                    <button onClick={() => this.openInAt()}
                            className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm"
                        >
                            Airtable
                    </button>
                </div>
            </a>
                
        </div>
        );
    }
}

export default ValueCard