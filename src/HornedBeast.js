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

    render () {
        return (
            <>
            <Card style={{width: '18rem', background: 'orange'}} key={this.props.idx}>
                <Card.Img 
                variant="top" 
                src = {this.props.imageUrl}
                alt = {this.props.description}
                title = {this.props.title} 
                onClick = {this.handleFaves}
                />
                <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>{this.props.title}</Card.Title>
                    <Card.Text style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: 'white',
                    margin: 'auto',
                    background: 'purple', 
                    width: '50px',
                    height: '50px', 
                    borderRadius: '50%',
                    }}>💙 {this.state.favorites}</Card.Text>
                    <Card.Text className='chngBckg'>Description: {this.props.description}</Card.Text>
                    <Card.Text>Horns: {this.props.horns}</Card.Text>
                </Card.Body>
            </Card>
            </>
        )
    }
}
export default HornedBeast;
