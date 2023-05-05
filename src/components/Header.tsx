import { Box, Link } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { InitialsAvatar } from "./InitialsAvatar";
//import Link from 'next/link';
export function Header(){
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-end',
				columnGap: '5px'
			}}
		>
			<InitialsAvatar/>
			<Link underline="none" href="/work" style={{marginLeft:'auto'}}>Work</Link>
			<Link underline="none" href="/projects">Projects</Link>
			<Link underline="none" href="/contact">Contact</Link>
		</Box>
	)
}