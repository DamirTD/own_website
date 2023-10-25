import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  Spacer,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isSmallerScreen] = useMediaQuery('(max-width: 480px)');
  const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    list-style-type: none;
  `;

  const navigate = useNavigate();

  const linkStyles = {
    marginLeft: '2.5rem',
    cursor: 'pointer',
  };

  return (
    <Box
      bg="rgba(255, 0, 0, 0)"
      p={7}
      color="black"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    >
      <Flex alignItems="center" maxW="1200px" mx="auto">
        <Logo>
          <span onClick={() => navigate('/')}>Tori</span>
        </Logo>

        <Spacer />

        {isSmallerScreen ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} onClick={() => navigate('/about')}>
                О нас
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} onClick={() => navigate('/services')}>
                Услуги
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <span style={linkStyles} onClick={() => navigate('/about')}>
              О нас
            </span>
            <span style={linkStyles} onClick={() => navigate('/services')}>
              Услуги
            </span>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
