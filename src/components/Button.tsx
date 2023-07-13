import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';


type ButtonProps = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton 
        bg="red.700"
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{
            bg: "red.500"
        }}
        {...rest}
    >
        <Heading
            color="white"
            fontSize="sm"
        >
            {title}
        </Heading>
    </NativeBaseButton>
  );
}