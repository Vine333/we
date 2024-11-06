import React from 'react';

import styled from 'styled-components'

const Manage = () => {
    return (
        <Managee>
            <ManageText>
                Manage your entire community<br/>
                in a single system

            </ManageText>
            <p className="who_is">Who is Nexcent suitable for?</p>
        </Managee>

    );
};

const Managee= styled.div`
  padding-top: 20px;
`
const ManageText = styled.h2`
  font-size: 30px;
  margin-bottom: -15px;
  padding: 20px;
`
export default Manage;