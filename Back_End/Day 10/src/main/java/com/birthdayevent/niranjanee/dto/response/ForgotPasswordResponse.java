package com.birthdayevent.niranjanee.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor

public class ForgotPasswordResponse {
    @Builder.Default
    private String message = "Something went wrong";

}
