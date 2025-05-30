using System.ComponentModel.DataAnnotations;

namespace RestApi.Models
{
    public class Phone
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Nazwa telefonu komórkowego jest wymagana")]
        [StringLength(15, MinimumLength = 3, ErrorMessage = "Nazwa telefonu komórkowego musi zawierać od 3 do 15 znaków")]
        public string Name { get; set; } = string.Empty;
        [Required(ErrorMessage = "Numer telefonu jest wymagany")]
        [RegularExpression(@"^\d{9}$", ErrorMessage = "Numer telefonu musi zawierać dokładnie 9 cyfr")]
        public string Number { get; set; } = string.Empty;
    }
}