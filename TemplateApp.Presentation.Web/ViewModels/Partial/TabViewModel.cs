namespace TemplateApp.Presentation.Web.ViewModels.Partial;

public class TabViewModel
{
    public string View { get; set; }
    public object ViewModel { get; set; }
    public string Id { get; set; }
    public string Title { get; set; }

    public TabViewModel(string view, object viewModel, string id, string title)
    {
        View = view;
        ViewModel = viewModel;
        Id = id;
        Title = title;
    }
}