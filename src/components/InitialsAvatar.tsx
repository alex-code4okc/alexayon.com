import { Avatar, SxProps, Theme } from "@mui/material";

interface IntialsAvatarProps {
	sx?: SxProps<Theme>;
}

export function InitialsAvatar(props: IntialsAvatarProps ) {
	return (
		<Avatar
			alt="Aa intials"
			style={{
				background:
					"linear-gradient(to right bottom, #43cea2, #185a9d)",
			}}
			sx={{...props.sx}}
		>
			Aa
		</Avatar>
	);
}
