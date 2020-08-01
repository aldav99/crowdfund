import React from 'react';
import AuthContext from './authContext';

export const UserInfo = () => (
    <AuthContext.Consumer>
        {
            value => {
                return (
                    <div align="right">
                        <div>{value.firstName}</div>
                        <div>{value.lastName}</div>
                        <img src={value.avatarUrl} width="30"
                            height="30" alt="User" />
                    </div>
                );
            }
        }
    </AuthContext.Consumer>
);
