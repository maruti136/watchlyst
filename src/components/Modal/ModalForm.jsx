import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Overlay,
  OverlayContent,
  Form,
  FormRow,
  Label,
  Input,
  Button,
  Spinner,
  CloseButton,
  FileInput,
  Img,
  AvatarContainer,
} from "./modalForm.styles.js";

import { useForm } from "react-hook-form";
import useCheckAuthorised from "../../Hooks/useCheckAuthorised";
import useUserUpdate from "../../Hooks/useUserUpdate";

export default function ModalForm({ closeModal }) {
  const [avatarSrc, setAvatarSrc] = useState(""); // Store the selected avatar's source
  const [isSelected, setIsSelected] = useState(null); // Track which image is selected
  const queryClient = useQueryClient();
  const { data: user } = useCheckAuthorised();
  const { updateUser, isPending } = useUserUpdate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateUser({ userId: user.id, avatarSrc, ...data });
    closeModal();
    queryClient.invalidateQueries("user");
  };

  const handleAvatarClick = (src, index) => {
    setAvatarSrc(src); // Set the avatar source to the selected image
    setIsSelected(index); // Set the selected image index (1, 2, etc.)
  };

  return (
    <Overlay>
      <OverlayContent>
        <CloseButton onClick={closeModal}>x</CloseButton>
        <AvatarContainer>
          <Img
            isSelected={isSelected === 1}
            src="https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d1.webp"
            alt="Male Avatar"
            onClick={() =>
              handleAvatarClick(
                "https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d1.webp",
                1
              )
            }
          />
          <Img
            isSelected={isSelected === 2}
            src="https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d2.webp"
            alt="Female Avatar"
            onClick={() =>
              handleAvatarClick(
                "https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d2.webp",
                2
              )
            }
          />
          <Img
            isSelected={isSelected === 3}
            src="https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d3.webp"
            alt="Female Avatar"
            onClick={() =>
              handleAvatarClick(
                "https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d3.webp",
                3
              )
            }
          />
          <Img
            isSelected={isSelected === 4}
            src="https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d4.webp"
            alt="Female Avatar"
            onClick={() =>
              handleAvatarClick(
                "https://ftzecdrudoxvsowbazej.supabase.co/storage/v1/object/public/user-avatar//d4.webp",
                4
              )
            }
          />
        </AvatarContainer>

        {/* Full Name Field */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FileInput
            id="avatarFile"
            type="file"
            accept="image/*"
            {...register("avatarFile", { required: false })}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setAvatarSrc(file);
                setIsSelected(null); // Reset selection when file is uploaded
              }
            }}
          />

          <FormRow>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              defaultValue={user?.user_metadata?.fullName || ""}
              placeholder="Full Name"
              {...register("fullName", {
                required: "This field is required!",
                maxLength: {
                  value: 30,
                  message: "Name cannot exceed 30 characters!",
                },
              })}
            />
            {errors?.fullName && <span>{errors?.fullName.message}</span>}
          </FormRow>

          {/* Email Field */}
          <FormRow>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={user?.user_metadata?.email || ""}
              placeholder="Email"
              {...register("email", {
                required: "This field is required!",
                pattern: {
                  value: /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/,
                  message: "Input a valid email id!",
                },
              })}
            />
            {errors?.email && <span>{errors?.email.message}</span>}
          </FormRow>

          {/* Save Button */}
          <Button type="submit">
            <>{isPending ? <Spinner /> : ""} Update</>
          </Button>
        </Form>
      </OverlayContent>
    </Overlay>
  );
}
