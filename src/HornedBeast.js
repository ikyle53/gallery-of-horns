import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: 0
        }

        this.chngBckgr = {

        }
    }

    handleFaves = () => {
        this.setState({
            favorites: this.state.favorites + 1
        })
    }

    handleClick = () => {
        this.props.showModalHandler(this.props.imageUrl, this.props.description)
    }

    callFunctions = () => {
        this.handleFaves();
        this.handleClick();
    }

    render() {
        return (
            <>
                <Card style={{
                     width: '18rem', 
                     background: 'orange' 
                     }} key={this.props.idx}>

                    <Card.Img
                        variant="top"
                        src={this.props.imageUrl}
                        alt={this.props.description}
                        title={this.props.title}
                        onClick={this.callFunctions}
                        style={{cursor: 'pointer'}}
                    />

                    <Card.Body style={{width: '100%'}}>
                        <Card.Title style={{ 
                            textAlign: 'center', 
                            width: '100%',
                            padding: '20px 0 20px 0',
                            color: 'purple',
                            fontSize: '1.5rem',
                            textDecoration: 'underline dotted'}}>
                        {this.props.title}
                        </Card.Title>

                        <Card.Text 
                        onClick={this.handleFaves} 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            color: 'white',
                            margin: 'auto',
                            background: 'purple',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            cursor: 'pointer'
                        }}>💙 {this.state.favorites}
                        </Card.Text>

                        <Card.Text className='chngBckg' 
                        style={{
                            textAlign: 'left', 
                            fontSize: '1.2rem', 
                            fontWeight: '700'
                            }}>{this.props.description}
                        </Card.Text>

                        <Card.Text 
                        style={{
                            textAlign: 'center',
                            fontSize: '1.1rem',
                            }}>Horns: {this.props.horns}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
export default HornedBeast;
