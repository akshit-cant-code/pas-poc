using FluentValidation;
using JsonCrudWebAPI.Models;

namespace JsonCrudWebAPI.Services.Validations;

public class LicenseValidator : AbstractValidator<Licence>
{
    public LicenseValidator()
    {
        RuleFor(x => x.ServerIP).NotNull().WithMessage("ServerIP must not be null");
        RuleFor(x => x.ProductKey).NotNull().WithMessage("ProductKey must not be null");
    }
}
