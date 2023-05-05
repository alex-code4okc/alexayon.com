import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { ListItemIcon, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MdLightMode, MdLightbulb, MdOutlineDarkMode, MdSettingsBrightness, MdWbTwighlight } from 'react-icons/md';
import { useDarkMode } from "next-dark-mode";

const pages = ["Work", "Projects", "Contact"];

function ResponsiveAppBar() {
	const router = useRouter();
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElLogo, setAnchorElLogo] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenLogoMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElLogo(event.currentTarget);
	};

	const handleCloseLogoMenu = () => {
		setAnchorElLogo(null);
	};

	const handleLinkClick = (
		e: React.MouseEvent<HTMLElement>,
		page: string
	) => {
		e.preventDefault();
		handleCloseNavMenu();
		switch (page) {
			case "":
				router.push(`/${page.toLowerCase()}`);
				break;
			case "Work":
				router.push(`/${page.toLowerCase()}`);
				break;
			case "Projects":
				router.push(`/${page.toLowerCase()}`);
				break;
			case "Contact":
				router.push(`/${page.toLowerCase()}`);
				break;
			default:
				break;
		}
	};

	const darkMode: ReturnType<typeof useDarkMode> = useDarkMode();
	const colorMode: 'light' | 'system' | 'dark' = React.useMemo(() => {
		if (darkMode.autoModeActive){
			return 'system';
		}
		if (darkMode.darkModeActive){
			return 'dark';
		}
		return 'light';
	}, [darkMode]);

	const onColorModeChange: (_: unknown, newColorMode: 'light' | 'system' | 'dark') => void = React.useCallback(
		(_: unknown, newColorMode: 'light' | 'system' | 'dark'): void => {
			if(newColorMode === 'light'){
				darkMode.switchToLightMode();
			}
			if(newColorMode === 'system'){
				darkMode.switchToAutoMode();
			}
			if(newColorMode === 'dark'){
				darkMode.switchToDarkMode();
			}
		}, [darkMode]
	)
	const theme = useTheme();
	//const colorMode = React.useContext(ColorModeContext);

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Avatar
						alt="Aa"
						src="/static/images/avatar/2.jpg"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							color: "inherit",
							textDecoration: "none",
						}}
						onClick={(e) => handleLinkClick(e, "")}
					/>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={(e) => handleLinkClick(e, page)}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={(e) => handleLinkClick(e, page)}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Color Mode">
							<IconButton
								sx={{ p: 0 }}
								onClick={handleOpenLogoMenu}
							>
								<MdLightbulb size={16} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar-color-mode"
							anchorEl={anchorElLogo}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElLogo)}
							onClose={handleCloseLogoMenu}
						>
						<MenuItem disabled>
							<ListItemIcon>
								<MdWbTwighlight size={16}/>
							</ListItemIcon>
							Color Mode
						</MenuItem>
						<ToggleButtonGroup
							color="primary"
							size="small"
							value={colorMode}
							onChange={onColorModeChange}
							aria-label="Color Mode"
							exclusive
							sx={{ px: 3, pt: 1, pb: 1 }}
						>
							<ToggleButton value="light">
								<MdLightMode style={{ marginRight: 4}} />
								Light
							</ToggleButton>
							<ToggleButton value="system">
								<MdSettingsBrightness style={{ marginRight: 4}} />
								System
							</ToggleButton>
							<ToggleButton value="dark">
								<MdOutlineDarkMode style={{ marginRight: 4}} />
								Dark
							</ToggleButton>
						</ToggleButtonGroup>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
