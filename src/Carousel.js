import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleImageClick = (event) => {
    const index = +event.target.dataset.index; // to get it back as a number add +
    this.setState({
      active: index,
    });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => {
            return (
              // eslint-disable-next-line
              <img
                src={photo}
                alt="animal-thumbnail"
                onClick={this.handleImageClick}
                key={index}
                data-index={index}
                className={index === active ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
