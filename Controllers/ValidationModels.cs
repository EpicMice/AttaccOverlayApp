using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


public class ValidInfo
{
    public string Alias { get; set; }
}

public class ValidEmail : ValidInfo
{
    [StringLength(40, MinimumLength = 7)]
    [RegularExpression(@"^[\w-\.]+@([\w -]+\.)+[\w-]{2,6}$",
    ErrorMessage = "Email must be a valid email of 7-40 total characters.")]
    public string Email { get; set; }
}

public class ValidPassword : ValidInfo
{
    [StringLength(30, MinimumLength = 8)]
    [RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$",
    ErrorMessage = "Password must be 8-30 characters of at least 1 Uppercase letter, 1 number, and 1 special character.")]
    public string Password { get; set; }
}

public class ValidUsername : ValidInfo
{
    [StringLength(20, MinimumLength = 2)]
    [RegularExpression(@"^(?i)[a-zA-Z''-'\s][a-zA-Z\d''-'\s]{2,20}$",
    ErrorMessage = "Value must start with a letter. Special characters are not allowed.")]
    public string Username { get; set; }
}

public class UserLoginValidationModel
{
    public ValidUsername Username { get; set; }
    public string GetUsername() { 
        return this.Username.Username; 
    }
    public ValidPassword Password { get; set; }
    public string GetPassword() { return this.Password.Password; }
    public ValidEmail Email { get; set; }
    public string GetEmail() { return this.Email.Email; }

    public virtual List<UserLoginValidationModel> UserLoginValidationModels { get; set; }
}