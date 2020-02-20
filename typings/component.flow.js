declare type ComponentProps = {
	background?: string,
	color?: string,
	rounded?: boolean | number,
	textSize?: number
}

declare type ContainerProps = {
	...ComponentProps
}

declare type TextProps = {
	color: string
}

declare type hex = string