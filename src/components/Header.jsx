import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../redux/action/ActionType';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header()
{
  const wishlist = useSelector(state => state.productReducerIds.product)
  console.log(wishlist);
   const addCart = useSelector(state => state.productReducerAddCart.product)
  console.log(addCart);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const dispatch = useDispatch()
  const handelEvent = (event) =>
  {
    console.log(event.target.value);
    dispatch(search(event.target.value))
}
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to='/wishlist' style={{textDecoration:'none' ,color:'black'}}>
          <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={wishlist?wishlist.length:0} color="secondary">
                <FavoriteIcon />
          </Badge>
        </IconButton>
        <p style={{marginTop:'11px'}}>Wishlist</p>
        </MenuItem>
      </Link>
     <Link to='/addCart' style={{textDecoration:'none' ,color:'black'}}>
          <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={addCart?addCart.length:0} color="secondary">
                <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p style={{marginTop:'11px'}}>Cart</p>
        </MenuItem>
        </Link>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent='day' color="secondary">
                <Brightness4Icon />
          </Badge>
        </IconButton>
        <p style={{marginTop:'11px'}}>Theme</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p style={{marginTop:'11px'}}>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p style={{marginTop:'11px'}}>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
                  </IconButton> */}
                  <Link to='/shoppingCart.com' style={{textDecoration:'none' ,color:'white'}}>
          <Typography  className={classes.title} variant="h5" style={{fontStyle:'italic',width:'130px'}} noWrap>
                          ShoppingCart
          </Typography>
                      </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onKeyUp={(e)=>handelEvent(e)}
              style={{width:'400px'}}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to='/wishlist' style={{textDecoration:'none' ,color:'white'}}>
                  <Tooltip title="Wishlist" aria-label="add">
          
            <IconButton aria-label="show 4 new mails" color="inherit" style={{marginTop:'8px'}}>
              <Badge badgeContent={wishlist?wishlist.length:0} color="secondary" >
                <FavoriteIcon />&nbsp; <span  style={{fontSize:'15px'}}>Wishlist</span> 
              </Badge>
                          </IconButton>
              </Tooltip>
            </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to='/addCart' style={{textDecoration:'none' ,color:'white'}}>
              <Tooltip title="Cart" aria-label="add">

                       <IconButton
              color="inherit" style={{marginTop:'8px'}}
            >              <Badge badgeContent={addCart?addCart.length:0} color="secondary">

                                  <ShoppingCartIcon /> <span  style={{fontSize:'15px'}}>Cart</span> 
                         </Badge>
                          </IconButton>
              </Tooltip>
               </Link>           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Tooltip title="Day/Night Theme" aria-label="add">

             <IconButton aria-label="show 4 new mails" color="inherit" style={{marginTop:'8px'}}>
              <Badge badgeContent='day' color="secondary">
                <Brightness4Icon /> &nbsp;<span style={{fontSize:'15px'}}>Theme</span> 
              </Badge>
                          </IconButton>
                      </Tooltip>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Tooltip title="Notification" aria-label="add">
                
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={0}  color="secondary">
                <NotificationsIcon /> <span  style={{fontSize:'15px'}}>Notifications</span> 
              </Badge>
                          </IconButton>
                          </Tooltip>
           
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon /> 
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
