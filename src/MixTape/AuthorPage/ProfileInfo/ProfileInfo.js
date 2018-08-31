import React from 'react'

import styled from 'styled-components'
import TwitterIcon from '../../../../assets/svg/MixTape/twitter-logo.svg'
import InstagramIcon from '../../../../assets/svg/MixTape/instagram-logo.svg'

const ProfileContainer = styled.div`
    width:100%;
    display:flex;
    margin-top:30px;
`

const ProfileImg = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
`

const Image = styled.div`
        width: 180px;
        height: 180px;
        border-radius: 100%;
        background-position: 66%;
        background-image: url(${props => props.src});
        background-size: cover;    
`

const EditProfile = styled.div`
    font-weight:800;
    font-size:20px;
    color:#616161;
    margin-top:15px;
    cursor:pointer;
`


const ProfileDesc = styled.div`
    flex:3;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`

const ProfileDescTitle = styled.div`
    display:flex;
    justify-content:space-between;
`

const ProfileInfo = styled.div`
    dispaly:flex;
    flex-direction:column;
`

const ProfileDescName = styled.h1`
    font-size:28px;
    margin:0;
`

const ProfileDescOcupation = styled.h3`
    margin:3px 0 0 0;
    font-size:18px;
    font-weight:800;
`

const ProfileDescIcons = styled.div`
    
`

const ProfileDescIcon = styled.img`
    width:20px;
    margin-left:10px;
    ${ props => props.TwitterIcon && 'height: 17px;'}
`



const ProfileDescContent = styled.div`
    margin-top:40px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:space-between;
`

const ProfileDescTxt = styled.span`
    color:#949494;
    font-size:18px;
    font-weight:800;
`

const ShowMore = styled.div`
    font-size:18px;
    color:#949494;
    margin-top:10px;
    cursor:pointer;
`

export default (props) => {
    console.log('props', props);
    const { img, name, ocupation, bio } = props.data
    return (
        <ProfileContainer>
            <ProfileImg>
                <Image src={img} />
                <EditProfile>
                    Edit Profile
                </EditProfile>
            </ProfileImg>
            <ProfileDesc>

                <ProfileDescTitle>
                    <ProfileInfo>
                        <ProfileDescName>
                            Bianca Grace
                        </ProfileDescName>
                        <ProfileDescOcupation>
                            Music Editor
                    </ProfileDescOcupation>
                    </ProfileInfo>
                    <ProfileDescIcons>
                        <ProfileDescIcon src={TwitterIcon} />
                        <ProfileDescIcon src={InstagramIcon} />
                        <ProfileDescIcon />
                    </ProfileDescIcons>
                </ProfileDescTitle>

                <ProfileDescContent>
                    <ProfileDescTxt>
                        {bio}
                    </ProfileDescTxt>
                    <ShowMore>
                        + Show More
                    </ShowMore>
                </ProfileDescContent>

            </ProfileDesc>
        </ProfileContainer>
    )
}
