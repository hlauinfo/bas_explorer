import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

class Roadmap extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Box>
          <br />
          <Typography variant="h4" component="h1" gutterBottom>
            Blockchain Explorer for BAS
          </Typography>
          <div className="roadmap">
            <div className="roadmap-header">
              <h2>Features</h2>
              <p className="text text--standart text--regular ">
              </p>
              </div>
              <div className="road-body">
              <div className="card card--secondary card-red">
                <div className="card__header">
                  <h3>Supported Chains</h3>
                </div>
                <ul>
                  <li>Ankr</li>
                  <li>CUBE</li>
                  <li>Project Galaxy</li>
                  <li>Aries</li>
                </ul>
              </div>
              <div className="card card--white card-yellow">
                <div className="card__header">
                  <h3>Project Info</h3>
                </div>
                <ul>
                  <li><a href="https://github.com/hlauinfo/bas_explorer">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    );
  }
}

export default Roadmap;