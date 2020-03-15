import React from 'react';
import {
  Flex,
  Text,
  Box,
  Link
} from 'rebass';

function Navbar() {
  return (
    <Flex
      px={2}
      color='white'
      bg='black'
      alignItems='center'>
      <Text p={2} fontWeight='bold'>Rebass</Text>
      <Box mx='auto' />
      <Link variant='nav' href='#!'>
        Profile
      </Link>
    </Flex>
    // <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    //   <a className="navbar-brand" href="/">MM</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link text-white text-uppercase" href="/">About Me<span className="sr-only">(current)</span></a>
    //       </li>
    //       <li className="nav-item active">
    //         <a className="nav-link text-white text-uppercase" href="/">Work<span className="sr-only">(current)</span></a>
    //       </li><li className="nav-item active">
    //         <a className="nav-link text-white text-uppercase" href="/">Contact<span className="sr-only">(current)</span></a>
    //       </li>
    //     </ul>
    //       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Resume</button>
    //   </div>
    // </nav>
  )
}

export default Navbar;
