const defaultBlogDescription = 'You will undoubtedly have dreams. Whether you dream of having the perfect house with the perfect car, or you dream of settling down to have a family, even if you dream of retiring by the time you are 40. The one key to success is doing something about it, as obvious it may sound but if you dream of retiring before you reach 40 and yet you aimlessly skip'
const blogContainer = document.getElementById('blogContainer')

const blogs = [
    {
        blogTitle: 'How to Build Trust at Work',
        blogDescription: defaultBlogDescription,
        blogImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
        author: 'Nina Ford',
        authorJob: 'Manager',
        authorImage: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        date: '8 Apr',
        status: 'normal'
    },

    {
        blogTitle: 'How Do You Get Up And Go Forward',
        blogDescription: defaultBlogDescription,
        blogImage: 'https://images.unsplash.com/photo-1573200686389-17ffa1384644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        author: 'Lura Reeves',
        authorJob: 'Manager',
        authorImage: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
        date: '8 Apr',
        status: 'new'
    },

    {
        blogTitle: 'Accomplish Great Things In Your Life',
        blogDescription: defaultBlogDescription,
        blogImage: 'https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        author: 'Ola Mann',
        authorJob: 'Manager',
        authorImage: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
        date: '8 Apr',
        status: 'normal'
    }
]

blogs.forEach((blog) => {
    const blogArticle = document.createElement('article');
    blogArticle.classList.add(
            'flex', 
            'flex-col', 
            'shadow-xl',
            'max-w-xs',
            'border',
            'rounded',
            'h-auto',
            'w-1/3',
            'bg-white'
    );

    const blogTitle = document.createElement('h1');
    blogTitle.textContent = blog.blogTitle;
    blogTitle.classList.add(
        'text-2xl',
        'tracking-wide',
        'text-slate-700',
        'p-5',
        'cursor-pointer',
        'hover:underline',
        'transition',
        'hover:text-blue-500'
    )


    const blogDescription = document.createElement('p');
    blogDescription.textContent = blog.blogDescription;
    blogDescription.classList.add(
        'text-slate-700',
        'text-sm',
        'tracking-wide',
        'leading-6',
        'max-w-sm',
        'p-5',        
    )

    const blogCredentials = document.createElement('footer')
    blogCredentials.classList.add(
        'flex',
        'items-center',
        'w-full',
        'justify-between',
        'p-5',
        'border-t',
    )

    const blogDate = document.createElement('h5')
    blogDate.classList.add(
        'text-slate-600',
        'text-sm',
        'tracking-wide',
        'whitespace-nowrap'
    )
    blogDate.textContent = blog.date

    const blogAuthorCredentials = document.createElement('div')
    blogAuthorCredentials.classList.add(
        'flex',
        'flex-row',
        'justify-start',
        'w-full',
        'gap-3',
        'items-center'
    )

    const blogAuthorId = document.createElement('div')
    blogAuthorId.classList.add(
        'flex',
        'flex-col',
    )

    const blogAuthorName = document.createElement('h3')
    blogAuthorName.textContent = blog.author
    blogAuthorName.classList.add(
        'font-semibold',
        'tracking-wide',
        'text-sm',
        'text-slate-700',
        'cursor-pointer',
        'hover:text-indigo-700',
        'transition'
    )

    const blogAuthorJob = document.createElement('h5')
    blogAuthorJob.textContent = blog.authorJob
    blogAuthorJob.classList.add(
        'text-sm',
        'tracking-wide',
        'text-slate-500'
    )

    const blogAuthorImageContainer = document.createElement('div')
    blogAuthorImageContainer.classList.add(
        'rounded-full',
        'w-10',
        'h-10',
    )

    const blogAuthorImage = document.createElement('img')
    blogAuthorImage.classList.add(
        'rounded-full',
        'w-10',
        'h-10'
    )
    blogAuthorImage.alt = ''
    blogAuthorImage.src = blog.authorImage

    const blogImageContainer = document.createElement('header')
    blogImageContainer.classList.add(
        'rounded'
    )

    const blogImage = document.createElement('img')
    blogImage.src = blog.blogImage
    blogImage.alt = ''
    blogImage.classList.add(
        'object-cover',
        'rounded-t',
        'h-44',
        'w-full'
    )

    blogImageContainer.appendChild(blogImage)

    blogAuthorId.appendChild(blogAuthorName)
    blogAuthorId.appendChild(blogAuthorJob)
    blogAuthorImageContainer.appendChild(blogAuthorImage)
    blogAuthorCredentials.appendChild(blogAuthorImage)
    blogAuthorCredentials.appendChild(blogAuthorId)
    blogCredentials.appendChild(blogAuthorCredentials)
    blogCredentials.appendChild(blogDate)


    // const blogCredentialsImageContainer = document.createElement('div')
    // blogCredentialsImageContainer.classList.add(
    //     'h-10',
    //     'w-10',
    //     'rounded-full'
    // )

    // const authorImage = document.createElement('img')
    // authorImage.src = blog.authorImage
    // authorImage.alt = ''
    // authorImage.classList.add(
    //     'object-cover',
    // )
    
    // blogCredentialsImageContainer.appendChild(authorImage)
    // blogCredentials.appendChild(blogCredentialsImageContainer)
    blogArticle.appendChild(blogImageContainer)
    blogArticle.appendChild(blogTitle);
    blogArticle.appendChild(blogDescription);
    blogArticle.appendChild(blogCredentials)

    blogContainer.appendChild(blogArticle); // Corrected this line to append blogArticle
});
